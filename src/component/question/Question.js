import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Question.css'
const Question = () => {
    return (
        <div> 
            <div data-aos="fade-right" className='question'>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h3>How Does React Work?</h3></Accordion.Header>
                        <Accordion.Body>
                            <article>React is a javascript library.Its creates Use Interface very efficient way.React is a declarative code component.Its means we create a component once and use it different place.If there are came any change in the real Dom. its do not change the whole pages.Rather its did compare with virtual dom.And change that specific element which has been change. </article>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><h3>How Does UseState Work?</h3></Accordion.Header>
                        <Accordion.Body>
                            <article>UseState is a react hook.Its a condition of any website.Its can change the website condition.We pass the initial value of a state and it returns another value.And then pass the updates value in any function.Then its update the website.When we need to update anything in the website then we use useState  </article>
                           
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><h3>Difference Between Props And State</h3></Accordion.Header>
                        <Accordion.Body>
                            <article>States are mutable.Its can access by attributes.State can defines component itself.The state is set and updated by the object.State is an asynchronous function.Props are immutable.Props is used for connecting parents and child.Its also can access by the attributes.Props is read only.</article>
                           
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Question;