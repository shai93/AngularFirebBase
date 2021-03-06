import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { PageHeaderModule } from '../../shared';
import {ApiService} from '../../shared/services/index';
import { FormsModule }   from '@angular/forms';


@NgModule({
    imports: [CommonModule, Ng2Charts, ChartsRoutingModule, PageHeaderModule,FormsModule],
    providers: [ApiService],
    declarations: [ChartsComponent]
})
export class ChartsModule {}
