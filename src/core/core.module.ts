// ANGULAR IMPORTS
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// CORE IMPORTS
import { singletonGuard } from './guards/singleton.guard';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';

@NgModule({
    declarations: [
        ToolbarComponent,
        PageNotFoundComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        ToolbarComponent
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        singletonGuard(parentModule, 'CoreModule');
    }
}
