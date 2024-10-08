import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reactjs-popular',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reactjs-popular.component.html',
  styleUrl: './reactjs-popular.component.scss'
})
export class ReactjsPopularComponent {

  reactPopular:ReactPopular = {
    topHeading: `Why is ReactJS Popular in 2024?`,
    image: `../../../../assets/react_popular.webp`,
    heading: `<b>Why is ReactJS Popular in 2024?</b>`,
    paragraph: [
      {
        subPara: `<a href="http://localhost:4200/" target="_blank" class="text-blue-400 underline">ReactJS</a> has really taken the tech world by storm, with over 220,000 live websites already using its power. And when you see big names like Apple, Instagram, Netflix, and PayPal jumping on the ReactJS bandwagon, it's no surprise you're curious about what's all about.`
      },
      {
        subPara: `Of course, A better question is…What is the secret behind ReactJS that has led to its wide adoption by global companies and brands? What are the main advantages that make everyone choose this technology? In other words, what's all the fuss about React JS?`
      },
      {
        subPara: `ReactJS, often referred to simply as React, is an open-source JavaScript library used to create user interfaces (UIs) in web applications.`
      },
      {
        subPara: `Developed and maintained by Facebook,<a href="https://en.wikipedia.org/wiki/React_(software)" target="_blank" class="text-blue-400 underline">React</a> is gaining popularity in the web developer community for its efficient approach to creating dynamic and interactive UI components.`
      },
      {
        subPara: `React is based on a component-based architecture, which means that user interfaces are divided into small reusable parts called components. These components encapsulate their own logic and can be combined to create complex user interfaces. React uses a virtual DOM (Document Object Model) to efficiently update and render only the parts of the UI that have changed, resulting in better performance and a smoother user experience.`
      },
    ],
    subHeadingOne: `Why ReactJS is Trending:`,
    underList: [
      {
        list: `<strong> Developer Toolkit: </strong> Learning new technologies and applying them to real-world activities can be both fun and useful, but only if you do it right. Facebook knows this, which is why its React JS framework now includes some must-have React developer tools and Chrome developer tools. Most importantly, these tools help any React developer to locate the child and parent components, observe the component hierarchy, and check the current status and properties of the components.`
      },
      {
        list: `<strong> Helps you create a rich user interface:</strong> In today's world, the quality of an application's user interface is critical. If the user interface is poorly designed, the application's chances of success are reduced. However, if an app has a great user interface, consumers are more likely to like it. Therefore, building rich user interfaces is almost essential to the survival and success of an application. The good news is that we can use React's declarative components to create high-quality user interfaces.`
      },
      {
        list: `<strong> Create custom components:</strong> React includes JSX, an optional syntax extension that allows you to create your own components. These components essentially enable HTML and allow all subcomponents to be displayed. JSX has already been used to create custom components, build high-volume applications, and transform HTML models into React Element trees.`
      },
      {
        list: `<strong> Increase developer productivity:</strong> When an application has complex logic and a single change in one component can have a significant impact on other components, frequent updates can be very frustrating for developers. However, Facebook added a component reuse feature to React to address this issue.`
      },
      {
        list: `The reusability of React components allows ReactJs developers to reuse the same digital objects. And the process of doing this is also quite simple. For example, developers can start with simple components like buttons, text boxes, and check boxes, and progress to wrapper components, which are then pushed into the main component. `
      },
      {
        list: `<strong> Virtual HOME:</strong>When developing a complex application, it is very important to define the structure of the application from the start, as this can impact performance. In other words, the DOM is a hierarchical representation of an HTML and XML document. Therefore, a small top-level change can have a significant impact on the application's UI. Facebook created a virtual DOM function to solve this problem. As the name suggests, Virtual DOM is a virtual representation of the DOM that allows developers to first test any changes to the virtual DOM and assess the risk of each change. Hence, this method helps to maintain excellent app performance and provide better user experience.`
      },
      {
        list: `<strong> Stability of the code:</strong>React uses a top-down flow to ensure that changes made to the child structure do not affect the parent structure. Therefore, when programmers make changes to an object, all they have to do is change its state and make the necessary changes. This way only one element is changed. With this data flow and structure, the application code is more stable and runs smoother.`
      },
      {
        list: `<strong> Simple test:</strong>One of the things that probably makes React the best is the easy way to test React-based projects. This is because views are treated as state-specific features in React. This allows React developers and test engineers to work closely together to change any state communicated by React View. The development team has full control over the output of the code, including all functions, events, and actions. They can then quickly determine if the application is working as expected, and if not, select an area to focus on.`
      },
      {
        list: `<strong> Strong community support:</strong>One of the main reasons to use React JS in your project is the strong community support. A large number of individuals, React developers contribute every day to make React a better frontend framework. Experts also regularly publishes free YouTube tutorials on React and React Native. They also write in-depth React news articles and web blogs.`
      },
      {
        list: `<strong> Optimized for SEO:</strong>One of the most well-known aspects of React is its ability to leverage <a href="https://en.wikipedia.org/wiki/Search_engine_optimization" target="_blank" class="text-blue-400 underline">SEO </a> benefits. By implementing React, companies can significantly reduce website loading speed and achieve higher rankings in search engines. All thanks to React's focus on render speed. Because React lets you use the same client-side and server-side code as   your web application, you can save time and money. This means that any website using React has an immediate performance benefit, making it more attractive to users and web crawlers.`
      },
    ],
    functionPara: `In summary, this blog post must have given you enough reasons to choose ReactJS for your project. However, the bigger question is always where to integrate it. You don't have to work a sweat to find this company because we're here to bring you the greatest company, voted for by groundbreaking brands and startups. And that's none other than <a href="http://localhost:4200/" target="_blank" class="text-blue-400 underline">Willben Group Private Limited</a>. At Willben Group Private Limited, we have already built businesses for well-known brands around the world.`,
    innerHeading: `Partner with Willben Group Private Limited`,
    innerParagraph: `Whether you want to collaborate, give projects, or join our team, we welcome the opportunity to engage with you. Our dedicated team is just a message away, ready to provide the support you need.Feel free to reach out through the provided contact details or simply fill out the contact form. Your feedback and queries are important to us, and we look forward to being in touch.`,
  }

}

interface ReactPopular {
  topHeading: string;
  image: string;
  heading: string;
  subHeadingOne: string;
  functionPara: string;
  innerHeading: string;
  innerParagraph: string;
  paragraph: Paragraph[];
  underList: UnderList[];
}

interface Paragraph {
  subPara: string;
}

interface UnderList {
  list: string;
}
