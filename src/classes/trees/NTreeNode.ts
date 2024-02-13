import { BaseNode } from "../base/BaseNode";

export class NTreeNode<T> extends BaseNode<T> {
  getData: () => T;
  comparator: (a: T, b: T) => number;
  children: NTreeNode<T> [];

  constructor(data: T, comparator: (a: T, b: T) => number){
    super(data);
    this.children = [];
    this.comparator = comparator;
    this.getData = () => this.data;
  }

  addChild(node: NTreeNode<T>){
    this.children.push(node);
  }

  removeChild(node: NTreeNode<T>): NTreeNode<T> | null {
    const index = this.children.findIndex((child) => this.comparator(child.data, node.data) === 0)
    if (index > -1){
      return this.children.splice(index, 1)[0]
    }
    return null;
  }
  
  // private isLeaf () {
  //   return this.children.length === 0;
  // }
}
