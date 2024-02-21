import React from 'react'

export default function Contactus() {
    return (
        <div className='container my-3'>
           <div class="feedback-card">
  <div class="feedback-header">SEND FEEDBACK</div>
  <form class="feedback-body">
  <input type="name" className='input-1' class="feedback-body__email" placeholder="name" />
    <input type="email" className='input-1' class="feedback-body__email" placeholder="Email" />
    
    <textarea  className='textarea-1'  className="feedback-body__message" rows="5" placeholder="Message">
</textarea>
    <button class='send-button' >Send Feedback</button>
  </form>
</div>
        </div>
    )
}
