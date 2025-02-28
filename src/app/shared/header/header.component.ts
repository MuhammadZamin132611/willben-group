import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
import { RouterLink } from '@angular/router';
import { NgClass, NgIf, } from '@angular/common';
import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource } from '@angular/material/tree';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule, RouterLink, NgClass, RouterLink, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isPopupVisibleLanguage = false;
  togglePopupLanguage() {
    this.isPopupVisibleLanguage = !this.isPopupVisibleLanguage
  }

  // constructor() {
  //   this.dataSource.data = TREE_DATA;
  //   console.log(TREE_DATA)
  // }


  // treeControl = new FlatTreeControl<ExampleFlatNode>(
  //   node => node.lavel,
  //   node => node.expandable,
  // );

  // private _transformer = (node: FoodNode, level: number) => {
  //   return {
  //     expandable: !!node.children && node.children.length > 0,
  //     name: node.name,
  //     lavel: level,

  //   };
  // }

  // treeFlattener = new MatTreeFlattener(
  //   this._transformer,
  //   node => node.lavel,
  //   node => node.expandable,
  //   node => node.children
  // );

  // dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  // hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  treeControl = new NestedTreeControl<FoodNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}

interface FoodNode {
  name: string;
  children?: FoodNode[];
  link?: string;
}

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  lavel: number;
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Home',
    link: '/',
    // children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
  },
  {
    name: 'Company',
    children: [
      {
        name: 'Portfolio',
        link: '/portfolio',
      },
      {
        name: 'About Us',
        link: '/about_us',
      }
    ],
  },
  {
    name: 'Services',
    children: [
      {
        name: 'Software Product Development',
        link: '/softwareproduct',
      },
      {
        name: 'Software Development',
        link: '/customer-software-developmen',
      },
      {
        name: 'SaaS Development',
        link: '/saas-development-service',
      },
      {
        name: 'Application Development',
        link: '/application-development',
      },
      {
        name: 'Web App Development',
        link: '/web-development',
      },
      {
        name: 'Software Testing',
        link: '/software-testing',
      },
      {
        name: 'UI/UX Design',
        link: '/uiux-design',
      },
      {
        name: 'Cloud Services',
        link: '/cloud-services',
      },
    ],
  },
  {
    name: 'Technologies',
    children: [
      {
        name: 'Frontend',
        children: [
          {
            name: 'React',
            link: '/react',
          },
          {
            name: 'Angular',
            link: '/angular',
          },
          {
            name: 'Next Js',
            link: '/next',
          },
        ],
      },
      {
        name: 'Backend',
        children: [
          {
            name: '.Net',
            link: '/dot-net',
          },
          {
            name: 'Node Js',
            link: '/nodejs',
          },
          {
            name: 'Java',
            link: '/java',
          },
          {
            name: 'Nest Js',
            link: '/nest',
          },
        ],
      },
      {
        name: 'Mobile',
        children: [
          {
            name: 'IOS',
            link: '/ios',
          },
          {
            name: 'Android',
            link: '/android',
          },
          {
            name: 'React Native',
            link: '/react-native',
          },
          {
            name: 'Flutter',
            link: '/flutter',
          },
        ],
      },
    ],
  },
  {
    name: 'Blog',
    link: '/blog',
  },
  // {
  //   name: 'Careers',
  //   // link: '/',
  // },
  {
    name: 'Contact',
    link: '/contact',
  },
  // {
  //   name: 'Vegetables',
  //   children: [
  //     {
  //       name: 'Green',
  //       children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
  //     },
  //     {
  //       name: 'Orange',
  //       children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
  //     },
  //   ],
  // },
];


