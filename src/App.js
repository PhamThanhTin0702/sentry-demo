import logo from './logo.svg';
import './App.css';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import React from'react'

function App () {
  return (
    <div>
      <h1>Hello React App</h1>
    </div>
  )
}

// Sentry.init({
//   dsn: "https://2a0dd5b4c8a54c328b3aafed1ae48a79@o1151077.ingest.sentry.io/6227456",
//   integrations: [new BrowserTracing()],

//   // We recommend adjusting this value in production, or using tracesSampler
//   // for finer control
//   tracesSampleRate: 1.0,
// });

// function App() {

//   const handleClick = () => {
//     // Sentry.configureScope(
//     //   scope => scope
//     //     .setLevel("Error")
//     //     .setUser({ email:"test@gmail.com"})
//     //     .setExtra("store", {a: "a", b: "b"})
//     // );
//     // Sentry.captureException();

//     // Sentry.showReportDialog()

//     const tx = Sentry.startTransaction({name: "tx 03"})

//     Sentry.getCurrentHub().configureScope(scope => scope.setSpan(tx))

//     const span = tx.startChild({
//       data: "span 03",
//       op: "task",
//       description: "description task"
//     })

//     const functionA = () => {
//       const spanA = tx.startChild({
//         data: "span A",
//         op: "task A",
//         description: "description task"
//       })

//       setTimeout(()=> {
//         spanA.finish()
      
//     }, 3000)

//     }

//     const functionB = () => {
//       const spanB = tx.startChild({
//         data: "span B",
//         op: "task B",
//         description: "description task"
//       })

//       setTimeout(()=> {
//         spanB.finish()
      
//     }, 1000)
//     }

//     const functionC = () => {
//       const spanC = tx.startChild({
//         data: "span C",
//         op: "task C",
//         description: "description task"
//       })

//       setTimeout(()=> {
//         spanC.finish()
      
//     }, 2000)
//     }
    
//     functionA()
//     functionB()
//     functionC()

//     setTimeout(()=> {
//     span.finish()

    
//   }, 4000)
//     tx.finish()


//     // const DoSomething = () => {

//     //   const functionA = () => {

//     //   }

//     //   const functionB = () => {
        
//     //   }

//     //   const functionC = () => {
//     //     Span
//     //   }

//     // }
    
//   }

//   return (
//     <div className="App">
//       <button onClick={() => {handleClick()}}>CLick Here</button>
//     </div>
//   );
// }

export default App;
