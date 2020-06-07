import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { PartnersComponent } from './partners/partners.component';
import { ProfessionalBuilderComponent } from './professional-builder/professional-builder.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WhatWeComponent } from './what-we/what-we.component';
import { OurFeatureComponent } from './our-feature/our-feature.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { OurAchievmentsComponent } from './our-achievments/our-achievments.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FeaturedWorksComponent } from './featured-works/featured-works.component';
import { LatestBlogComponent } from './latest-blog/latest-blog.component';
import { OurPartnersComponent } from './our-partners/our-partners.component';



@NgModule({
  declarations: [TopBarComponent, NavBarComponent, FooterComponent, 
    SliderComponent, PartnersComponent, ProfessionalBuilderComponent, 
    AboutUsComponent, WhatWeComponent, OurFeatureComponent, OurServicesComponent, 
    OurTeamComponent, OurAchievmentsComponent, TestimonialComponent, FeaturedWorksComponent, 
    LatestBlogComponent, OurPartnersComponent

  ],
  imports: [
    CommonModule
  ],
  exports     : [
    TopBarComponent,NavBarComponent,FooterComponent,SliderComponent,PartnersComponent,
    ProfessionalBuilderComponent,AboutUsComponent,WhatWeComponent,OurFeatureComponent,
    OurServicesComponent,OurTeamComponent,OurAchievmentsComponent,TestimonialComponent,
    FeaturedWorksComponent,LatestBlogComponent,OurPartnersComponent
  ]
})
export class LayoutsModule { }
