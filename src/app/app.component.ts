import { AfterViewInit, ComponentFactoryResolver, ComponentRef, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { Directive, ViewContainerRef } from '@angular/core';
import { ContactComponent } from './views/contact/contact.component';
import { GiteComponent } from './views/gite/gite.component';
import { IndexComponent } from './views/index/index.component';
import { TarifComponent } from './views/tarif/tarif.component';

@Directive({
  selector: '[mainPanel]'
})
export class MainPanelDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(MainPanelDirective) mainPanel?: MainPanelDirective;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ){

  }
  ngAfterViewInit(): void {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(IndexComponent)
		const componentRef: ComponentRef<IndexComponent> = this.mainPanel!.viewContainerRef.createComponent<IndexComponent>(componentFactory)
			
  }
  onIndex(){
    this.mainPanel!.viewContainerRef.clear();
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(IndexComponent)
		const componentRef: ComponentRef<IndexComponent> = this.mainPanel!.viewContainerRef.createComponent<IndexComponent>(componentFactory)
  }
  onGite(){
    this.mainPanel!.viewContainerRef.clear();
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(GiteComponent)
		const componentRef: ComponentRef<GiteComponent> = this.mainPanel!.viewContainerRef.createComponent<GiteComponent>(componentFactory)
  }
  onTarif(){
    this.mainPanel!.viewContainerRef.clear();
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(TarifComponent)
		const componentRef: ComponentRef<TarifComponent> = this.mainPanel!.viewContainerRef.createComponent<TarifComponent>(componentFactory)
  }
  onContact(){
    this.mainPanel!.viewContainerRef.clear();
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(ContactComponent)
		const componentRef: ComponentRef<ContactComponent> = this.mainPanel!.viewContainerRef.createComponent<ContactComponent>(componentFactory)
  }
}
