import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Pushkar kr. Jha</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Software Engineer & Web Developer</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
         Hello!, I'm Pushkar,  Passionate about software development, I specialize in creating responsive web applications using React.js and Node.js. With a knack for problem-solving and a drive for innovation, I enjoy crafting user-friendly solutions that make a positive impact.
         <br />
         Let's connect and build something amazing together!
{' '}
            <a
               href="https://linkedin.com/in/pushkarkumar27/"
               target="_blank"
               className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
               rel="noreferrer noopener"
            >
               Linkedin 
            </a>{' '}

<br />
<br />
            {' '}
            <a
               href="https://github.com/GoodGuyPJ"
               target="_blank"
               className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
               rel="noreferrer noopener"
            >
               GitHub
            </a>{' '}

            {' '}
            <a
               href="https://leetcode.com/u/GoodGuyPJ/"
               target="_blank"
               className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
               rel="noreferrer noopener"
            >
               LeetCode
            </a>{' '}
         </p>
      </div>
   )
}

export default Intro;