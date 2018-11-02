import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { TitleSectionComponent } from './title-section/title-section.component';
import { FooterComponent } from './footer/footer.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ExperienceSectionComponent } from './experience-section/experience-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    TitleSectionComponent,
    FooterComponent,
    AboutSectionComponent,
    ExperienceSectionComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
