import { Component } from '@angular/core';

@Component({
  selector: 'app-template-refrance',
  templateUrl: './template-refrance.component.html',
  styleUrls: ['./template-refrance.component.css']
})
export class TemplateRefranceComponent {
title="Template Refrance"
// getval(item:string)
getval(item:HTMLInputElement)
{
  console.warn(item)
}
}
