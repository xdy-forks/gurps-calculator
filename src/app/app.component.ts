import { Component, OnInit } from '@angular/core';
import { MenuService } from './services/menu.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { UserBottomSheetComponent } from './components/user-bottom-sheet/user-bottom-sheet.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gurps-calculator';
  showMenuIcon: boolean;

  constructor(private menuService: MenuService, private bottomSheet: MatBottomSheet) { }

  btnMenuClicked() {
    this.menuService.emitToggleEvent(null);
  }

  openBottomSheet() {
    this.bottomSheet.open(UserBottomSheetComponent);
  }
}
