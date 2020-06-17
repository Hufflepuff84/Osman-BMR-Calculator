import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'table-pagination-example',
  styleUrls: ['table-pagination-example.css'],
  templateUrl: 'table-pagination-example.html',
})
export class TablePaginationExample implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'age', 'weight', 'height', 'bmr'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  id: number;
  name: string;
  age: number;
  weight: number;
  height: number;
  bmr: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Sally Smith', age: 22, weight:68, height: 152, bmr: 1525},
  {id: 2, name: 'Jim Hanson', age: 35, weight:85, height: 170, bmr: 1550},
  {id: 3, name: 'Larry James', age: 66, weight: 90, height: 155, bmr: 1653.75},
  {id: 4, name: 'Susan Jimenez', age: 44, weight:90, height: 200, bmr: 1935},
  {id: 5, name: 'Johnathan FLeishman', age: 62, weight:88, height: 160, bmr: 1575},
  {id: 6, name: 'Jeffrey Epstein', age: 34, weight:73, height: 167, bmr: 1575},
  {id: 7, name: 'David Luke', age: 43, weight:78, height: 189, bmr: 1575},
  {id: 8, name: 'Tom CHung', age: 55, weight:89, height: 140, bmr: 1495},
  {id: 9, name: 'Sanjay Gupta', age: 50, weight:75, height: 152, bmr: 1455},
  {id: 10, name: 'Chris Cuomo', age: 52, weight:91, height: 170, bmr: 1717.5},
  {id: 11, name: 'Melinda Robbins', age: 22, weight:59, height: 152, bmr: 1435},
  {id: 12, name: 'Peter Jennings', age: 53, weight:75, height: 168, bmr: 1540},
  {id: 13, name: 'Larry King', age: 90, weight:55, height: 162, bmr: 1117.5},
  {id: 14, name: 'Sarah Palin', age: 56, weight:58, height: 150, bmr: 1242.5},
  {id: 15, name: 'Hillary CLinton', age: 63, weight:55 , height: 150, bmr: 1177.5},
  {id: 16, name: 'Wendy Torrence', age: 33, weight:45, height: 155, bmr: 1258.75},
  {id: 17, name: 'Jack Torrence', age: 33, weight:54, height: 165, bmr: 1411.25},
  {id: 18, name: 'Freddy Johnson', age: 22, weight:135, height: 170, bmr: 2307},
  {id: 19, name: 'Christina JOnes', age: 19, weight:59, height: 168, bmr: 1550},
  {id: 20, name: 'Benjamin Franklin', age: 45, weight:88, height: 169, bmr: 1716.25},

];