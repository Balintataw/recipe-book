import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})

export class HeaderComponent {
    @Output() pageChanged = new EventEmitter<string>();

    isOpen = false;

    onSelect(page: string) {
        this.pageChanged.emit(page);
    }
    toggleMenu() {
        this.isOpen = !this.isOpen;
    }
}