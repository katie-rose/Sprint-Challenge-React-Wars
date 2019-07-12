# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

ReactJS is not a framework but only a library that does one thing really well.. render UI. Scalable, reusable and fun to write. Everything is a component.

2. What does it mean to think in react?

To outline sections and plan ahead on what components you will create and how the structure will be organized.

3. Describe state.

State is a plain JavaScript object that is managed within the component.

4. Describe props.

Props is also a plain JavaScript object that is passed to the component.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are something that is created with useEffect. They let you express different things when a component renders. 

If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument. This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run. Otherwise, this will run in an infinite loop.
