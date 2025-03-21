import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

const options = [undefined, 1, 2, 3, 'one', 'two', 'three'] as const;
type Selection = (typeof options)[number];

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected readonly options = options.map((o) => ({
    name: `${o} (${typeof o})`,
    value: o,
  }));

  protected message?: string;

  private _selection: Selection = 'one';
  protected get selection() {
    return this._selection;
  }
  protected set selection(value) {
    this._selection = value;
    this.message = options.includes(value)
      ? `Your selection is ${value}`
      : `"${value}" (${typeof value}) is not a valid selection`;
  }

  protected getTypeOf(value: unknown) {
    return typeof value;
  }
}
