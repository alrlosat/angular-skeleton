import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() textButton: string = 'Valider';
  @Input() color: ThemePalette = 'primary';
  @Input() raised: boolean = false;
  @Input() stroked: boolean = false;
  @Input() flat: boolean = false;
  @Input() icon: boolean = false;
  @Input() disabled: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
