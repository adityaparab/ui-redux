import { Component, OnInit, HostBinding, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FrameworkLibrariesMap, Framework, StoreLibrary, Middleware } from '../../constants/framework-map';
import { ProjectService } from '../../services/project/project.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {
  @HostBinding('class') klass = 'flex flex-column';

  frameworks: Framework[] = FrameworkLibrariesMap;
  framework: Framework;
  storeLibrary: StoreLibrary;
  middleware: Middleware;


  projectForm: FormGroup;

  projectFormControls = {
    nameControl: new FormControl('', [Validators.required]),
    frameworkControl: new FormControl('', [Validators.required]),
    storeLibraryControl: new FormControl('', [Validators.required]),
    middlewareControl: new FormControl('', [Validators.required])
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private projectService: ProjectService
  ) { }

  buildForm() {
    this.projectForm = this.formBuilder.group(this.projectFormControls);
  }

  ngOnInit() {
    this.buildForm();
    this.changesListener();
  }

  create() {
    const formValue: Project = this.projectForm.value;
    this.projectService.setProject(formValue);
    this.router.navigate(['/editor']);
  }

  changesListener() {
    const frameworkControl = this.projectFormControls.frameworkControl;
    const storeLibraryControl = this.projectFormControls.storeLibraryControl;
    const middlewareControl = this.projectFormControls.middlewareControl;

    frameworkControl.valueChanges.subscribe(framework => {
      this.framework = this.frameworks.find((fw: Framework) => fw.key === framework);
      storeLibraryControl.updateValueAndValidity();
      middlewareControl.updateValueAndValidity();
      this.storeLibrary = null;
      this.middleware = null;
    });

    storeLibraryControl.valueChanges.subscribe((storeLibrary: string) => {
      this.storeLibrary = this.framework.storeModules.find((library: StoreLibrary) => library.key === storeLibrary);
      console.log(this.framework);
      console.log(this.storeLibrary);
    });
  }
}
