import React from 'react'
import Lolly from '../component/Lolly'


export default ({ pageContext: { recipientName, senderName, message, flavourMiddle, flavourTop, flavourBottom,lollyPath } }) => {

    return (
    <div>
        <Lolly fillLollyTop={flavourTop} fillLollyMiddle={flavourMiddle} fillLollyBottom={flavourBottom} />
        <div>
          <p >Your Lolly is freezing. Share it with this link: <a>httas://vlolly.net/${lollyPath}</a></p>
          <div >
            <p id="recipient">${recipientName}</p>
            <div id="message" >${message}</div>
            <p id="from">— ${senderName}</p>
          </div>
          <p >${senderName} made this virtual lolly for you. You can <a href="/create">make your own</a> to send to a friend who deserve some sugary treat which won't rot their teeth...</p>
        </div>
        <footer>
            <p>
                Built and hosted with <a href="https://netlify.com?utm_source=vlolly&utm_medium=staticfirst-pnh&utm_campaign=devex">Netlify</a> by <a href="https://twitter.com/philhawksworth">Phil Hawksworth</a>
            </p>
            <p>
                Read about how and why <a href="https://css-tricks.com/static-first-pre-generated-jamstack-sites-with-serverless-rendering-as-a-fallback/">on CSS-Tricks</a>.
        </p>
        </footer>
    </div>
)}