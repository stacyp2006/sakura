import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import CardDetail from '../CardDetail/CardDetail';
import Plan from '../Plan/Plan';
import { Route, Link } from 'react-router-dom';
import { getPlants } from '../../apiCalls.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      plants: [],
      plan: []
    }
  }

  addToPlan = (newPlant) => {
    const foundPlant = this.state.plan.find(plant => plant.commonName === newPlant.commonName)
    if(!foundPlant) {
      this.setState({plan: [...this.state.plan, newPlant]})
    }
  }

  removeFromPlan = (id) => {
    this.setState(state => {
      const plan = state.plan.filter(item => item.id !== id);
      return {
        plan
      }
    })
  }

  componentDidMount = async () => {
    await getPlants()
    .then(data => this.setState({plants: data.data}))
    .catch(error => console.log('fetch error'))
  }

  render() {
    return (
      <main>
        <nav className='links'>
          <img alt='cherry blossom icon'
           className='blossom' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQyMS45NXB4IiBoZWlnaHQ9IjQyMS45NXB4IiB2aWV3Qm94PSIwIDAgNDIxLjk1IDQyMS45NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDIxLjk1IDQyMS45NTsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxnIGlkPSJMYXllcl81XzQ2XyI+DQoJCQk8Zz4NCgkJCQk8cGF0aCBkPSJNMjY2LjE0NiwxODMuMDExYzM4Ljc5NywxMS40NjUsMjYuNTEtNTAuNzg1LTQuNzg1LTI0LjUxYy0xLjU0MSwxLjI5NS0yLjA0MywxLjAxNi0wLjY3OC0wLjYzNQ0KCQkJCQljMjUuNjcyLTMwLjk5Ni0zOC42LTQyLjAyMy0yNC4zNjgtMi41NDNjMC4zMzQsMC45MjYsMC4wMTQsMS4wNDUtMC41MTcsMC4xNmMtMjIuMjIxLTM3LjExOS01NC4wMzgsMjMuNDUxLTExLjAxOCwyMS41NTENCgkJCQkJYzEuODA4LTAuMDgsMS45MTgsMC4zNDQsMC4xNzQsMC43NDZjLTQwLjk5LDkuNDg4LDExLjE4NCw1Ni41MiwxNy43MzQsMTcuMjdjMC4zMDYtMS44MjgsMC41NTEtMS41NTMsMC42MTYsMC40MQ0KCQkJCQljMS4yNTIsMzYuOTUxLDU1LjMzNCw1Ljk1OSwyMi42MjYtMTEuNzAxQzI2My45NjcsMTgyLjY5NywyNjQuMDAzLDE4Mi4zNzYsMjY2LjE0NiwxODMuMDExeiBNMjU0LjY4OCwxNzYuMjkxDQoJCQkJCWMtMi4xMjgtMC4zMi0yLjgyMiwwLjgzMi0xLjU0NiwyLjU2NGMxLjI3NSwxLjczLDEuNDkxLDMuNzYsMC40NzgsNC41MDhzLTIuODkxLTAuMDU1LTQuMTY3LTEuNzg1cy0yLjU4NS0xLjQwOC0yLjkwNiwwLjcxOQ0KCQkJCQljLTAuMzE5LDIuMTI3LTEuNjA0LDMuNzE1LTIuODUxLDMuNTI1Yy0xLjI0Ny0wLjE4OC0yLjAwNS0yLjA4Mi0xLjY4NS00LjIwOXMtMC44MzMtMi44MjItMi41NjItMS41NDUNCgkJCQkJYy0xLjczLDEuMjc3LTMuNzYsMS40OTItNC41MDksMC40NzdjLTAuNzQ5LTEuMDE0LDAuMDU1LTIuODg5LDEuNzg1LTQuMTY2YzEuNzI5LTEuMjc3LDEuNDA2LTIuNTg2LTAuNzIyLTIuOTA2DQoJCQkJCWMtMi4xMjctMC4zMi0zLjcxMy0xLjYwNC0zLjUyMy0yLjg1MmMwLjE4OC0xLjI0NiwyLjA4Mi0yLjAwNCw0LjIxLTEuNjg0YzIuMTI3LDAuMzIsMi44MjEtMC44MzIsMS41NDUtMi41NjMNCgkJCQkJYy0xLjI3Ny0xLjczMi0xLjQ5MS0zLjc2LTAuNDc4LTQuNTFjMS4wMTYtMC43NDgsMi44OTEsMC4wNTUsNC4xNjcsMS43ODdjMS4yNzYsMS43MywyLjU4NCwxLjQwNiwyLjkwNC0wLjcyMQ0KCQkJCQljMC4zMjEtMi4xMjcsMS42MDQtMy43MTMsMi44NTItMy41MjVzMi4wMDYsMi4wODIsMS42ODUsNC4yMDljLTAuMzIsMi4xMjcsMC44MzMsMi44MjIsMi41NjMsMS41NDUNCgkJCQkJYzEuNzI5LTEuMjc3LDMuNzYxLTEuNDkyLDQuNTA4LTAuNDc3YzAuNzQ5LDEuMDE2LTAuMDU1LDIuODkxLTEuNzg0LDQuMTY4Yy0xLjczLDEuMjc1LTEuNDA3LDIuNTg0LDAuNzIsMi45MDQNCgkJCQkJYzIuMTI4LDAuMzIsMy43MTQsMS42MDQsMy41MjUsMi44NTJDMjU4LjcwOCwxNzUuODU0LDI1Ni44MTUsMTc2LjYxMSwyNTQuNjg4LDE3Ni4yOTF6Ii8+DQoJCQkJPHBhdGggZD0iTTEzMy41MDMsMzIzLjMyNmMzMC45OTIsOS4xNTYsMjEuMTc4LTQwLjU2OC0zLjgyMi0xOS41NzhjLTEuMjMxLDEuMDMzLTEuNjMzLDAuODExLTAuNTQxLTAuNTA4DQoJCQkJCWMyMC41MDctMjQuNzY0LTMwLjgzNC0zMy41Ny0xOS40NjctMi4wMzFjMC4yNjcsMC43NCwwLjAxMSwwLjgzNi0wLjQxMiwwLjEyOWMtMTcuNzUtMjkuNjU0LTQzLjE2OCwxOC43MzItOC44LDE3LjIxNQ0KCQkJCQljMS40NDItMC4wNjIsMS41MzIsMC4yNzMsMC4xMzgsMC41OTZjLTMyLjc0NSw3LjU3OCw4LjkzNCw0NS4xNSwxNC4xNjgsMTMuNzk3YzAuMjQ0LTEuNDYzLDAuNDM5LTEuMjQsMC40OTIsMC4zMjYNCgkJCQkJYzEuMDAxLDI5LjUyLDQ0LjIwMyw0Ljc2NCwxOC4wNzUtOS4zNDhDMTMxLjc2NCwzMjMuMDc0LDEzMS43OTIsMzIyLjgyLDEzMy41MDMsMzIzLjMyNnogTTEyNC4zNTIsMzE3Ljk1Ng0KCQkJCQljLTEuNjk5LTAuMjU2LTIuMjU0LDAuNjY2LTEuMjM0LDIuMDQ5YzEuMDIxLDEuMzgzLDEuMTkxLDMuMDA0LDAuMzgxLDMuNjAyYy0wLjgxLDAuNi0yLjMwOS0wLjA0My0zLjMyOS0xLjQyNg0KCQkJCQlzLTIuMDY0LTEuMTI1LTIuMzIsMC41NzRjLTAuMjU3LDEuNjk5LTEuMjgxLDIuOTY3LTIuMjc3LDIuODE2Yy0wLjk5Ni0wLjE1MS0xLjYwMi0xLjY2NC0xLjM0Ni0zLjM2Mw0KCQkJCQljMC4yNTctMS42OTktMC42NjUtMi4yNTQtMi4wNDgtMS4yMzRjLTEuMzgyLDEuMDIxLTMuMDAzLDEuMTkxLTMuNjAxLDAuMzgxYy0wLjU5OS0wLjgxMSwwLjA0My0yLjMwOSwxLjQyNi0zLjMyNg0KCQkJCQljMS4zODMtMS4wMjEsMS4xMjQtMi4wNjQtMC41NzUtMi4zMmMtMS42OTktMC4yNTgtMi45NjYtMS4yODEtMi44MTYtMi4yNzdjMC4xNS0wLjk5NiwxLjY2NC0xLjYwMiwzLjM2Mi0xLjM0Ng0KCQkJCQljMS42OTksMC4yNTYsMi4yNTUtMC42NjYsMS4yMzQtMi4wNDljLTEuMDItMS4zODQtMS4xOTEtMy4wMDItMC4zODEtMy42MDRjMC44MTEtMC41OTgsMi4zMDksMC4wNDUsMy4zMjksMS40Mw0KCQkJCQljMS4wMiwxLjM4MywyLjA2NCwxLjEyMiwyLjMyMS0wLjU3NmMwLjI1Ni0xLjY5OSwxLjI4MS0yLjk2OCwyLjI3Ny0yLjgxNnMxLjYwMiwxLjY2NCwxLjM0NSwzLjM2Mw0KCQkJCQljLTAuMjU2LDEuNjk5LDAuNjY1LDIuMjU0LDIuMDQ4LDEuMjMyYzEuMzgzLTEuMDIsMy4wMDQtMS4xODksMy42MDItMC4zODFjMC41OTksMC44MTItMC4wNDMsMi4zMTEtMS40MjYsMy4zMjgNCgkJCQkJYy0xLjM4MywxLjAyMS0xLjEyNCwyLjA2NCwwLjU3NSwyLjMyMmMxLjY5OSwwLjI1NiwyLjk2NiwxLjI4MSwyLjgxNSwyLjI3N0MxMjcuNTYyLDMxNy42MDcsMTI2LjA1LDMxOC4yMTQsMTI0LjM1MiwzMTcuOTU2eiINCgkJCQkJLz4NCgkJCQk8cGF0aCBkPSJNMzMwLjg1MiwyMzcuMTJjMzEuMzQ3LDkuMjY0LDIxLjQxOS00MS4wMjktMy44NjQtMTkuODAyYy0xLjI0NiwxLjA0Ni0xLjY0OSwwLjgxOS0wLjU0OC0wLjUxMw0KCQkJCQljMjAuNzQtMjUuMDQzLTMxLjE4NS0zMy45NTItMTkuNjg4LTIuMDU3YzAuMjcxLDAuNzQ4LDAuMDExLDAuODQ2LTAuNDE3LDAuMTMxYy0xNy45NTEtMjkuOTg5LTQzLjY2LDE4Ljk0NS04LjksMTcuNDENCgkJCQkJYzEuNDYtMC4wNjQsMS41NTEsMC4yNzYsMC4xNDIsMC42MDRjLTMzLjExNyw3LjY2NCw5LjAzNCw0NS42NjQsMTQuMzI4LDEzLjk1MWMwLjI0Ni0xLjQ3NywwLjQ0My0xLjI1NCwwLjQ5OCwwLjMzMg0KCQkJCQljMS4wMTMsMjkuODU0LDQ0LjcwNSw0LjgxNCwxOC4yNzktOS40NTNDMzI5LjA5LDIzNi44NjcsMzI5LjEyMSwyMzYuNjA5LDMzMC44NTIsMjM3LjEyeiBNMzIxLjU5NSwyMzEuNjkNCgkJCQkJYy0xLjcxOC0wLjI1OC0yLjI3OSwwLjY3Ni0xLjI0OCwyLjA3MmMxLjAzMSwxLjM5OCwxLjIwNSwzLjAzNywwLjM4NiwzLjY0NWMtMC44MTgsMC42MDQtMi4zMzUtMC4wNDUtMy4zNjYtMS40NDMNCgkJCQkJYy0xLjAzMS0xLjM5Ny0yLjA4OS0xLjEzNy0yLjM0OCwwLjU4MmMtMC4yNjEsMS43MTktMS4yOTcsMy0yLjMwNCwyLjg0OGMtMS4wMDgtMC4xNS0xLjYyLTEuNjgyLTEuMzYtMy4zOTgNCgkJCQkJYzAuMjYtMS43Mi0wLjY3NC0yLjI3OS0yLjA3MS0xLjI0OHMtMy4wMzYsMS4yMDUtMy42NDMsMC4zODVjLTAuNjA1LTAuODIsMC4wNDMtMi4zMzQsMS40NDEtMy4zNjcNCgkJCQkJYzEuMzk3LTEuMDMsMS4xMzctMi4wODgtMC41ODEtMi4zNDhjLTEuNzItMC4yNTgtMy0xLjI5NS0yLjg1LTIuMzAzYzAuMTUxLTEuMDEsMS42ODQtMS42MTksMy40LTEuMzU5DQoJCQkJCWMxLjcxOSwwLjI1OCwyLjI4LTAuNjc0LDEuMjQ4LTIuMDcyYy0xLjAzMi0xLjM5Ni0xLjIwNS0zLjAzNy0wLjM4Ni0zLjY0M2MwLjgxOS0wLjYwNiwyLjMzNiwwLjA0NSwzLjM2NiwxLjQ0MQ0KCQkJCQljMS4wMzEsMS4zOTgsMi4wODksMS4xMzksMi4zNDktMC41ODFjMC4yNTktMS43MiwxLjI5Ni0zLDIuMzAzLTIuODQ5YzEuMDA5LDAuMTUyLDEuNjIsMS42ODMsMS4zNjEsMy40DQoJCQkJCWMtMC4yNjEsMS43MTksMC42NzIsMi4yNzcsMi4wNjksMS4yNDhjMS4zOTctMS4wMzEsMy4wMzgtMS4yMDUsMy42NDQtMC4zODdjMC42MDQsMC44Mi0wLjA0NCwyLjMzNC0xLjQ0MSwzLjM2Nw0KCQkJCQljLTEuMzk3LDEuMDMxLTEuMTM4LDIuMDg4LDAuNTgyLDIuMzQ3YzEuNzE4LDAuMjYxLDMsMS4yOTgsMi44NDksMi4zMDZDMzI0Ljg0NCwyMzEuMzM5LDMyMy4zMTMsMjMxLjk1MSwzMjEuNTk1LDIzMS42OXoiLz4NCgkJCQk8cGF0aCBkPSJNMzk5LjAzLDEyNC45NjNjMzYuNjMyLDEwLjgyNiwyNS4wMzEtNDcuOTUxLTQuNTE5LTIzLjE0MWMtMS40NTYsMS4yMjMtMS45MywwLjk1OS0wLjY0LTAuNg0KCQkJCQljMjQuMjM4LTI5LjI2OC0zNi40NDQtMzkuNjc4LTIzLjAxLTIuNDAyYzAuMzE0LDAuODc1LDAuMDE0LDAuOTg4LTAuNDg2LDAuMTUyYy0yMC45OC0zNS4wNDktNTEuMDI0LDIyLjE0My0xMC40MDEsMjAuMzQ4DQoJCQkJCWMxLjcwNS0wLjA3NCwxLjgxMiwwLjMyNCwwLjE2MywwLjcwNWMtMzguNzAzLDguOTU5LDEwLjU2LDUzLjM2NywxNi43NDUsMTYuMzA3YzAuMjg4LTEuNzI5LDAuNTIxLTEuNDY3LDAuNTgzLDAuMzg3DQoJCQkJCWMxLjE4NCwzNC44ODksNTIuMjQ2LDUuNjI3LDIxLjM2My0xMS4wNDlDMzk2Ljk3MiwxMjQuNjY2LDM5Ny4wMDYsMTI0LjM2NSwzOTkuMDMsMTI0Ljk2M3ogTTM4Ni43NzcsMTE3LjcxNA0KCQkJCQljLTEuNjkzLTAuMjU2LTIuMjQ5LDAuNjY0LTEuMjMsMi4wNDNzMS4xODgsMi45OTYsMC4zODEsMy41OTRjLTAuODExLDAuNTk2LTIuMzA0LTAuMDQ1LTMuMzItMS40MjQNCgkJCQkJYy0xLjAxOC0xLjM3OS0yLjA2MS0xLjEyMS0yLjMxNCwwLjU3NGMtMC4yNTUsMS42OTUtMS4yNzgsMi45NTktMi4yNzEsMi44MDljLTAuOTk0LTAuMTUtMS41OTktMS42NTgtMS4zNDMtMy4zNTQNCgkJCQkJYzAuMjU1LTEuNjk1LTAuNjY0LTIuMjUtMi4wNDMtMS4yMzJjLTEuMzgsMS4wMTgtMi45OTYsMS4xODktMy41OTQsMC4zODFjLTAuNTk3LTAuODA5LDAuMDQ0LTIuMzAzLDEuNDI0LTMuMzINCgkJCQkJYzEuMzc5LTEuMDE4LDEuMTIxLTIuMDYxLTAuNTc0LTIuMzE2Yy0xLjY5NC0wLjI1NS0yLjk1OS0xLjI3Ny0yLjgxLTIuMjcxYzAuMTQ5LTAuOTk0LDEuNjU4LTEuNTk4LDMuMzU0LTEuMzQyDQoJCQkJCWMxLjY5NCwwLjI1NiwyLjI0OS0wLjY2NCwxLjIzLTIuMDQzcy0xLjE4OC0yLjk5Ni0wLjM4LTMuNTkyYzAuODA5LTAuNTk4LDIuMzAzLDAuMDQzLDMuMzE5LDEuNDIyDQoJCQkJCWMxLjAxOCwxLjM3OSwyLjA2MSwxLjEyMSwyLjMxNC0wLjU3NGMwLjI1NS0xLjY5NSwxLjI3Ny0yLjk1OSwyLjI3MS0yLjgwOWMwLjk5MywwLjE1LDEuNTk5LDEuNjYsMS4zNDIsMy4zNTQNCgkJCQkJYy0wLjI1NiwxLjY5NSwwLjY2MywyLjI1LDIuMDQ0LDEuMjMyYzEuMzc5LTEuMDE4LDIuOTk1LTEuMTg5LDMuNTkyLTAuMzgxYzAuNTk4LDAuODA5LTAuMDQzLDIuMzA1LTEuNDIyLDMuMzIyDQoJCQkJCWMtMS4zOCwxLjAxOC0xLjEyMSwyLjA1OSwwLjU3MiwyLjMxNGMxLjY5NCwwLjI1NiwyLjk1OSwxLjI3NywyLjgxMSwyLjI3MUMzODkuOTgxLDExNy4zNjcsMzg4LjQ3MywxMTcuOTcsMzg2Ljc3NywxMTcuNzE0eiIvPg0KCQkJCTxwYXRoIGQ9Ik0zNDMuMDM1LDE1Mi42MDljMS4zOTItMS4wNzQsMC42Ni0xLjcyNywwLjI3NC0yLjE0NmMtMy44OTMtNC4yNDItNi41OTItOS40NzEtNy4yMTMtMTQuOTA0DQoJCQkJCWMtMC4wMTUtMC4xMjktMC4wMjgtMC4yNjgtMC4wNDMtMC40MTRjLTAuMDQ5LTAuNTQ5LTAuMzc5LTEuNzM0LTEuODY5LTAuODM0Yy0xMS4wOTgsNy4wNTctMjEuMDIyLDEzLjAyOS0zNS44MjgsMjEuMDY2DQoJCQkJCWMtMS43NDIsMS4yNDItMC44NjIsMi4wMjEtMC42MDYsMi42NTZjMS40MDgsMy41MDQsMi4xNDksNy4zMDMsMi4xNSwxMS4wNjRjMCwyLjYyMy0wLjMzNSw1LjEwMi0wLjk2NCw3LjQwNg0KCQkJCQljLTAuMTU4LDAuNTg2LDAuMTc3LDEuMzQ0LDIuMDMyLDAuMzcxQzMxOC41ODEsMTY3LjY1LDMzMC4wNzEsMTYwLjc3NSwzNDMuMDM1LDE1Mi42MDl6Ii8+DQoJCQkJPGc+DQoJCQkJCTxwYXRoIGQ9Ik0zNjcuNDUxLDIwNy44ODJjLTQuMzI0LDEuNDk2LTUuNjY4LDIuMTA5LTkuODU4LDMuNDY0Yy0yLjIyOSwwLjY4OC0wLjkyLDEuOTg0LTAuNTQsMi43MTgNCgkJCQkJCWMxLjQzMiwyLjc2LDIuMzQ5LDUuODA3LDIuNzA0LDguOWMwLjA1OCwwLjQ5NCwwLjA0NSwxLjUwNiwxLjI2MiwxLjA5YzMuOTE4LTEuMzQsNi45NjctMi40NDcsMTAuNzktMy44OTENCgkJCQkJCWMwLjQzMi0wLjE2MiwxLjM5LTAuNjI5LDEuMDEzLTEuMzI2bC0zLjk4OS0xMC41MTJDMzY4LjgyOCwyMDguMzI5LDM2OC41NzEsMjA3LjQ5NSwzNjcuNDUxLDIwNy44ODJ6Ii8+DQoJCQkJCTxwYXRoIGQ9Ik0yNzMuNDgyLDIzMC44NDFjLTAuODU0LTEuNDgxLTEuNTAzLTMuMDctMS45NTMtNC43MjVjLTAuMTQyLTAuNTItMC4yNDktMS42MDQtMS43NDUtMS42MDQNCgkJCQkJCWMtMTEuNTQ3LTAuMjI1LTIwLjUxOC0xLjE4LTI5LjM2NC0yLjQ3M2MtMTEuNTkzLTEuNjkxLTIwLjEzNy0zLjYwNy0yOC4yMTItNS44OTVjLTAuODQzLTAuNDA0LTAuNzY1LTAuNjIxLDAuMTcyLTAuOTM4DQoJCQkJCQljMC44NTgtMC4zNjUtMC4wNi0xLjI0Ni0wLjY1LTEuNzA3Yy01LjE2OS00LjAxMi05LjE5OS05LjU0OS0xMC45MTUtMTUuNTU3Yy0wLjE5NS0wLjY4Mi0wLjUzMS0xLjk2MS0yLjc0OC0xLjQ4Ng0KCQkJCQkJYy01OC4yNzcsMTUuMTM4LTEyMi40OTUsMjAuMzU1LTE5MC4wNi0wLjM4NWMwLDAtNS4wNTktMS4wODQtNS42NTksNC4yOTNjLTAuNDU4LDQuMDk4LTEuMzcsMTEuNjI5LTIuMTg3LDE4LjAxNg0KCQkJCQkJYy0wLjk2Miw3LjUyNSwyLjcxNSw3Ljg5NiwyLjcxNSw3Ljg5NmMxNS45OTcsNC45MDgsMjYuMTQ2LDYuOTQ1LDQzLjI2MSw4Ljk0M2MyLjQ2OCwwLjE0Niw0LjE5MiwxLjIzNiw0Ljg3MiwxLjcxMQ0KCQkJCQkJYzEyLjIwNSw4LjU1NywyOC43MjEsMjIuNjA0LDQxLjI2MSw0NC45MzhjMC41NTUsMC44NTcsMS4xODksMC41NjQsMS41ODgsMC41MTRjMC44MTYtMC4xMDUsMS42NDMtMC4xNjgsMi40NzYtMC4xNjgNCgkJCQkJCWMxLjE4OCwwLDIuNDg5LDAuMTAyLDMuODY1LDAuMzgzYzAuNDMzLDAuMDg4LDAuNjM2LDAuMDIxLDAuODA4LTAuMjU4YzAuNDYxLTAuNzQ2LDAuODQ5LTEuNDc5LDEuMjk0LTIuMTEzDQoJCQkJCQljMS41MzgtMi4xODgsMy4wMTMtMy42OTcsNS4yNi01LjEwNWMwLjU1Ni0wLjM3MSwwLjI2MS0wLjgzOCwwLjE1NC0xLjEwNGMtNi0xNC44NTUtMTMuMzQyLTI2Ljc1Ni0yMS40MzgtMzUuMDI1DQoJCQkJCQljLTAuNDU3LTAuNDY1LTEuMDM2LTEuMDg2LDAuNDY0LTEuMzY5YzE3Ljg0MiwwLDM0LjMzNS0xLjQ2MSw1My4wNzItNC4zOThjOC43NjgtMS4zNzUsMTcuNjM2LTMuMDksMjYuNTg0LTUuMTA3DQoJCQkJCQljMC45ODgtMC4yMjUsMi4yMTktMC40MTYsNC43MDctMC40MTZjMTkuNDI4LDIuOTU3LDQ1LjkzNSw2Ljg5Niw2Ni4zOTMsOS45M2MxMC41MDYsMS41NTcsMjIuOTUyLDIuNjM5LDM3LjA3NywyLjY4OQ0KCQkJCQkJYzEuMzc1LTAuMDE4LDEuNTA1LTAuNjExLDEuNTg3LTAuOTJjMC4yNDYtMC45MzIsMC41NjUtMS44NTUsMC45NzYtMi43N2MwLjEyOC0wLjI4NSwwLjAyMS0xLjA5OC0wLjc3MS0xLjk4Mg0KCQkJCQkJQzI3NS4xMTcsMjMzLjI1NSwyNzQuMTM0LDIzMS45NjgsMjczLjQ4MiwyMzAuODQxeiIvPg0KCQkJCTwvZz4NCgkJCTwvZz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />
          <h1 className='title'>Sakura</h1>
          <Link to='/' className='homelink'>Home</Link> {' '} <Link to='/plan' className='planlink'>My Garden Plan</Link>
        </nav>
        <h2 className='greeting'>Choose a plant to start planning your garden!</h2>
        <Route exact path='/'
          render={() => <CardContainer plantList={this.state.plants}
          />}
        />
        <Route path='/plant/:id'
          render={({ match }) =>{
            const { id } = match.params;
            const plantToRender = this.state.plants.find(plant => plant.id === parseInt(id));
            return <CardDetail addToPlan={this.addToPlan}
            removeFromPlan={this.removeFromPlan} {...plantToRender}/>
          }}
        />
        <Route path='/plan' render={() => <Plan plan={this.state.plan}
        removeFromPlan={this.removeFromPlan}
        />}/>
      </main>
    )
  }
}

export default App;
