import { Component, OnInit, ViewChild } from "@angular/core";
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { process } from '@progress/kendo-data-query';
import { AppService } from './app.service';


@Component({
  selector: "app-root",
 template: `
<kendo-grid
 [kendoGridBinding]="gridView"
 kendoGridSelectBy="id"
 [selectedKeys]="mySelection"
 [pageSize]="20"
 [pageable]="true"
  [sortable]="true"
  [groupable]="true"
  [reorderable]="true"
  [resizable]="true"
  [height]="680"
  [columnMenu]="{filter: true}"
  >
  <ng-template kendoGridToolbarTemplate>
                <input placeholder="Search in all columns..." kendoTextBox (input)="onFilter($event.target.value)"/>
            </ng-template>

     <kendo-grid-checkbox-column
        [width]="45"
        [headerClass]="{'text-center': true}"
        [class]="{'text-center': true}"
        [resizable]="false"
        [columnMenu]="false"
        showSelectAll="true"
      ></kendo-grid-checkbox-column>


  <kendo-grid-column-group title="Users" [columnMenu]="false">
     <kendo-grid-column field="userId" title="userId">
      
     </kendo-grid-column>

     <kendo-grid-column field = "id" title = "id">
     
     </kendo-grid-column>

     <kendo-grid-column field = "title" title = "title">
     
     </kendo-grid-column>

     <kendo-grid-column field = "body" title = "body">
     
     </kendo-grid-column>
 </kendo-grid-column-group>
</kendo-grid>
 `
})
export class AppComponent implements OnInit {
  @ViewChild(DataBindingDirective , {static: false}) dataBinding: DataBindingDirective;

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
