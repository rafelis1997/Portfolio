export type ProjectProps = {
  id: number
  description: string
  imgUrl: string
  isInverse: boolean
  primaryButton: { title: string; goTo: string }
  secondaryButton?: { title: string; goTo: string }
  comment?: {
    text: string
    commentImgUrl: string
  }
}

export interface portfolioDataProps {
  content: {
    project: ProjectProps[]
  }
}

export const portfolioData = {
  content: {
    projects: [
      {
        id: 1,
        description:
          'I’ve made a work for Time Jumble game to display one of them main character on the game webpage. It was a marker tracking AR on the “What is Time Jumble” section.',
        imgUrl: 'timeJumble.png',
        isInverse: true,
        primaryButton: {
          title: 'Go to Website',
          goTo: 'https://www.timejumble.com/#about',
        },
      },
      {
        id: 2,
        description:
          'PPTech was a great work to do and a step foward on what Web 3.0 will be. PPTech is an austalian company that sells disposable masks. I’ve made a web face filter so clients can try on the masks and see how it fit on their face. My code was implemented on the Shopify store of PPTech',
        imgUrl: 'pptechImg.png',
        isInverse: false,
        primaryButton: {
          title: 'Go to Website',
          goTo: 'https://ppetech.com.au',
        },
        secondaryButton: { title: 'See the video', goTo: '#' },
        comment: {
          text: 'Always made awesome jobs for my companies, this time he was implemented AR feature for my masks model, they are brillient idea and we will always want to continue working with him. - Woodtech',
          commentImgUrl: 'woodtechLogo.png',
        },
      },
      {
        id: 3,
        description:
          'AR Experience is my demo Web App to showcase my work as an webAR developer, it’s in continuos development and will show what is possible with webAR today',
        imgUrl: 'arDemo.png',
        isInverse: true,
        primaryButton: {
          title: 'Go to Website',
          goTo: 'https://arjs-react-test.vercel.app',
        },
        secondaryButton: {
          title: 'Go to Github',
          goTo: 'https://github.com/rafelis1997/arjs-react-experimental-app/tree/master',
        },
      },
    ],
  },
}
