import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Matter from 'matter-js'
import Marquee from 'react-fast-marquee'
const StyledSvg = styled.svg`
  position: absolute;
  height: auto;
`

const StyledShapes = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
`

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const JobWord = () => {
  const shapesRef = useRef(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    async function runMatter() {
      await delay(500)
      let windowWidth = wrapperRef.current.getBoundingClientRect().width
      let windowHeight = wrapperRef.current.getBoundingClientRect().height
      console.log(windowWidth, windowHeight)
      var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        World = Matter.World,
        Events = Matter.Events,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        Composite = Matter.Composite,
        Bodies = Matter.Bodies,
        Constraint = Matter.Constraint,
        Body = Matter.Body

      // create engine
      var engine = Engine.create(),
        world = engine.world

      // create renderer
      var render = Render.create({
        element: shapesRef.current,
        engine: engine,
        options: {
          width: windowWidth,
          height: windowHeight,
          wireframes: false,
          background: 'transparent',
          showVelocity: false,
        },
      })

      Render.run(render)

      // create runner
      var runner = Runner.create()
      Runner.run(runner, engine)

      const bodyOptions = {
        restitution: 0.5,
        density: 500.01,
      }

      // Square
      const squareDimension = windowWidth / 3.5
      const square = Bodies.rectangle(
        windowWidth / 4,
        squareDimension / 2 + 15,
        squareDimension,
        squareDimension,

        {
          ...bodyOptions,
          render: {
            fillStyle: '#BB9CFE',
            strokeStyle: 'black',
            lineWidth: 7,
          },
        }
      )

      const squareConstraint = Constraint.create({
        pointA: { x: windowWidth / 4, y: squareDimension / 2 + 15 },
        bodyB: square,
        length: 3,
        stiffness: 0.001,
        render: {
          visible: false,
        },
      })

      World.add(world, [square, squareConstraint])

      // Triangle
      const triangle = Bodies.polygon(
        windowWidth / 2,
        windowHeight / 2 - 30,
        3,
        windowWidth / 5.5,
        {
          ...bodyOptions,
          render: {
            fillStyle: '#BB9CFE',
            strokeStyle: 'black',
            lineWidth: 7,
          },
        }
      )

      const triangleConstraint = Constraint.create({
        pointA: { x: windowWidth / 2 + 30, y: windowHeight / 2 - 100 },
        bodyB: triangle,
        length: 3,
        stiffness: 0.001,

        render: {
          visible: false,
        },
      })

      World.add(world, [triangle, triangleConstraint])

      // Circle
      const circle = Bodies.circle(
        windowWidth / 3,
        windowHeight * 0.7 - 50,
        windowWidth / 7,
        {
          ...bodyOptions,
          render: {
            fillStyle: '#BB9CFE',
            strokeStyle: 'black',
            lineWidth: 7,
          },
        }
      )

      const circleConstraint = Constraint.create({
        pointA: { x: windowWidth / 3, y: windowHeight * 0.7 - 60 },
        bodyB: circle,
        length: 0.001,
        stiffness: 0.001,
        render: {
          visible: false,
        },
      })

      World.add(world, [circle, circleConstraint])

      // add mouse control
      var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
          mouse: mouse,
          constraint: {
            angularStiffness: 0,
            render: {
              visible: false,
            },
          },
        })

      Composite.add(world, mouseConstraint)

      // allow scrolling on canvas
      mouseConstraint.mouse.element.removeEventListener(
        'mousewheel',
        mouseConstraint.mouse.mousewheel
      )
      mouseConstraint.mouse.element.removeEventListener(
        'DOMMouseScroll',
        mouseConstraint.mouse.mousewheel
      )

      Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: windowWidth, y: windowHeight },
      })

      return {
        engine: engine,
        runner: runner,
        render: render,
        canvas: render.canvas,
        stop: function () {
          Matter.Render.stop(render)
          Matter.Runner.stop(runner)
        },
      }
    }
    runMatter()
  }, [])
  return (
    <div className="img-left" ref={shapesRef}>
      <img alt="" src={`images/jobs-blank.svg`} ref={wrapperRef} />
      <StyledShapes className="shapes"></StyledShapes>
      <Marquee play={true} gradient={false} className="job-word cd">
        Creative Directors &nbsp;
      </Marquee>
      <Marquee play={true} speed={25} gradient={false} className="job-word des">
        Designers
      </Marquee>
      <Marquee play={true} speed={25} gradient={false} className="job-word pr">
        Producers
      </Marquee>
      <Marquee play={true} speed={20} gradient={false} className="job-word dev">
        Developers
      </Marquee>
      <Marquee play={true} speed={20} gradient={false} className="job-word ux">
        UX &nbsp; UI &nbsp; Product &nbsp;
      </Marquee>
    </div>
  )
}

export default JobWord
