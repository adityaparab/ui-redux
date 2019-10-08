import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.styl']
})
export class EditorComponent implements OnInit {
  @HostBinding('class') klass = 'flex flex-row';
  editorOptions = { theme: 'vs-dark', language: 'javascript' };
  code = 'function x() {\nconsole.log("Hello world!");\n}';

  constructor() { }

  ngOnInit() {
  }

}
