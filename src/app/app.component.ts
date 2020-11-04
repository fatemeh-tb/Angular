import { Component, OnInit, ViewChild } from "@angular/core";
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { process } from '@progress/kendo-data-query';
import { AppService } from './app.service';


@Component({
  selector: "app-root",
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  @ViewChild(DataBindingDirective, { static: false }) dataBinding: DataBindingDirective;

  user = [];
  public gridData: any[] = this.user;
  public gridView: any[];


  public mySelection: string[] = [];


  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.gridView = this.gridData;
    this.getData();
  }

  public onFilter(inputValue: string): void {
    this.gridView = process(this.gridData, {
      filter: {
        logic: "or",
        filters: [
          {
            field: 'userId',
            operator: 'contains',
            value: inputValue
          },
          {
            field: 'id',
            operator: 'contains',
            value: inputValue
          },
          {
            field: 'title',
            operator: 'contains',
            value: inputValue
          },
          {
            field: 'body',
            operator: 'contains',
            value: inputValue
          }

        ],
      }
    }).data;

    this.dataBinding.skip = 0;
  }


  getData() {
    this.appService.getAll().subscribe(resp => {
      this.User(resp);
    })
  }

  User(result: Object[]) {
    for (let i in result) {

      this.user.push(result[i])
    }
    console.log(this.user);

  }


}
