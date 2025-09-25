import React, { useState } from 'react'
import Stepper, { Step } from './Stepper';

const section4 = (props) => {
  const [name, setName] = useState('');
  const [Reason, setReason] = useState('');
  const [msg, setMsg] = useState('');

  const handleFormComplete = () => {
    if (!name.trim() || !Reason.trim() || !msg.trim()) {
      alert('Please fill in all fields!');
      return;
    }

    // Replace with your actual WhatsApp number (include country code, no + sign)
    const yourWhatsAppNumber = '+918076694728'; // Example: Indian number
    
    // Format the message
    const message = `👋 Hey! I just checked out your portfolio and wanted to reach out.\n  
My name is ${name} 😊,\n I'm here because i would like to ${Reason} 📌. \n 
Here's my message for you: ${msg} 💬  
━━━━━━━━━━━━━━━━`


    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${yourWhatsAppNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    alert('✅ Opening WhatsApp! Please send the message to complete your submission.');
    
    // Reset form
    setName('');
    setContDetail('');
    setMsg('');
  };

  return (
    <div id='chat' className='w-full flex flex-wrap text-white relative h-120 flex-col bg-gradient-to-b from-zinc-800 to-black section4'>
      <div className='left self-start'>
        <h1 className='text-zinc-300 ml-3 font-thin text-2xl'>Have Something in Mind?</h1>
        <div className=''>
          <Stepper
            initialStep={1}
            onStepChange={(step) => console.log('Step:', step)}
            onFinalStepCompleted={handleFormComplete}
            backButtonText="Previous"
            nextButtonText="Next"
          >
            <Step>
              <h2>Let's hear it!</h2>
              <p className='mt-8'>Go to next step!</p>
            </Step>

            <Step>
              <h2 className='mb-3'>First Things First</h2>
              <input 
                value={name} 
                className='p-2 bg-zinc-200/30 rounded w-full  ' 
                onChange={(e) => setName(e.target.value)} 
                placeholder="What is your name?" 
              />
              <p className='mt-6'>Click next</p>
            </Step>

            <Step>
              <h2 className='mb-3'>Reason for Contact</h2>
              <input 
                value={Reason} 
                className='p-2 bg-zinc-200/30 rounded w-full ' 
                onChange={(e) => setReason(e.target.value)} 
                placeholder="E.g., collaboration request, service inquiry, feedback" 
              />
              <p className='mt-6'>Click next</p>
            </Step>

            <Step>
              <h2 className='mb-3'>Let's hear it!!</h2>
              <textarea 
                value={msg} 
                className='p-2 bg-zinc-200/30 rounded w-full h-20 resize-none ' 
                onChange={(e) => setMsg(e.target.value)} 
                placeholder="Your message" 
              />
              <p className='mt-6'>Ready to send !</p>
            </Step>
          </Stepper>
        </div>
      </div>
      <div className='right-4 flex flex-col items-end absolute bottom-2 self-end'>
        <h1 className='text-zinc-200 mb-3 text-xl font-thin'>Find me here</h1>
        <div className='flex gap-1.5' >
          <a href="https://github.com/AantrikshX"><img src="/contgithub.png" className='w-6 rounded'  alt="" /></a>
          <a href="https://www.linkedin.com/in/aantriksh-sharma-6807b22a5/"><img src="/contlink.jpg" className='w-6 rounded '  alt="" /></a>
          <a href="https://x.com/aantriksh_"><img src="/contx.jpg" className='w-6 rounded'  alt="" /></a>
          <a href="https://www.instagram.com/aantriksh_/"><img src="/continsta.jpg" className='w-6 rounded'  alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default section4