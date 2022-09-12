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
        id: 6,
        description:
          'Ig.News is an ReactJS news website with subscription integrated with Stripe, using: Typescript, SCSS, Next.js, FaunaDB and Stripe API',
        imgUrl: 'ignews.gif',
        isInverse: true,
        primaryButton: {
          title: 'Go to Website',
          goTo: 'https://ignews-iota-virid.vercel.app',
        },
        secondaryButton: {
          title: 'Go to Github',
          goTo: 'https://github.com/rafelis1997/desafio-03-ignite-blog',
        },
      },
      {
        id: 7,
        description:
          'Github blog is an ReactJS blog using github API as CMS for posts, using: Typescript, React Markdown, Framer-motion, styled-components, Vite, FaunaDB, React Hook Form and React Query',
        imgUrl: 'github-blog.gif',
        isInverse: false,
        primaryButton: {
          title: 'Go to Website',
          goTo: 'https://github-blog-project.vercel.app',
        },
        secondaryButton: {
          title: 'Go to Github',
          goTo: 'https://github.com/rafelis1997/reactjs-github-blog-challenge',
        },
      },
      {
        id: 8,
        description:
          'Coffee Delivery is an ReactJS e-commerce to learn ReactJS Context API and Hooks, using: Typescript, JSON Server, Vite, Styled-components, React Hook Form and Axios',
        imgUrl: 'coffeeDelivey.gif',
        isInverse: true,
        primaryButton: {
          title: 'Go to Github',
          goTo: 'https://github.com/rafelis1997/03-Coffee-Delivery',
        },
      },
      {
        id: 4,
        description:
          'Upfi is a ReactJS photo gallery case study do learn API consumption and file upload, using: Typescript, Chakra UI, styled-components, Next.js, FaunaDB, React Hook Form and React Query',
        imgUrl: 'upfi.gif',
        isInverse: true,
        primaryButton: {
          title: 'Go to Github',
          goTo: 'https://github.com/rafelis1997/Upfi',
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
        // secondaryButton: { title: 'See the video', goTo: '#' },
        comment: {
          text: 'Always made awesome jobs for my companies, this time he was implemented AR feature for my masks model, they are brilliant idea and we will always want to continue working with him. - Woodtech',
          commentImgUrl: 'woodtechLogo.png',
        },
      },
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
    ],
  },
}
