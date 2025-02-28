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
    link: '/react',
    // children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
  },
  {
    name: 'Company',
    children: [
      {
        name: 'Portfolio',
        link: '/angular',
      },
      {
        name: 'About Us',
        // link: '/',
      }
    ],
  },
  {
    name: 'Services',
    children: [
      {
        name: 'Software Product Development',
        // link: '/',
      },
      {
        name: 'Software Development',
        // link: '/',
      },
      {
        name: 'SaaS Development',
        // link: '/',
      },
      {
        name: 'Application Development',
        // link: '/',
      },
      {
        name: 'Web App Development',
        // link: '/',
      },
      {
        name: 'Software Testing',
        // link: '/',
      },
      {
        name: 'UI/UX Design',
        // link: '/',
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
            // link: '/',
          },
          {
            name: 'Angular',
            // link: '/',
          },
          {
            name: 'Next Js',
            // link: '/',
          },
        ],
      },
      {
        name: 'Backend',
        children: [
          {
            name: '.Net',
            // link: '/',
          },
          {
            name: 'Node Js',
            // link: '/',
          },
          {
            name: 'Java',
            // link: '/',
          },
          {
            name: 'Nest Js',
            // link: '/',
          },
        ],
      },
      {
        name: 'Mobild',
        children: [
          {
            name: 'Mobile',
            // link: '/',
          },
          {
            name: 'iOS',
            // link: '/',
          },
          {
            name: 'Android',
            // link: '/',
          },
          {
            name: 'React Native',
            // link: '/',
          },
          {
            name: 'Flutter',
            // link: '/',
          },
        ],
      },
    ],
  },
  {
    name: 'Blog',
    // link: '/',
  },
  {
    name: 'Careers',
    // link: '/',
  },
  {
    name: 'Contact',
    // link: '/',
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


