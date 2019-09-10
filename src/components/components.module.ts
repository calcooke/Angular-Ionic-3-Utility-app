import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu';
import { ReportListComponent } from './report-list/report-list';
@NgModule({
	declarations: [MenuComponent,
    ReportListComponent],
	imports: [],
	exports: [MenuComponent,
    ReportListComponent]
})
export class ComponentsModule {}
