import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CardsComponent } from './Task-2-Tagline/cards/cards.component';
import { CoverPhotoComponent } from './Task-2-Tagline/cover-photo/cover-photo.component';
import { FooterComponent } from './Task-2-Tagline/footer/footer.component';
import { HeaderComponent } from './Task-2-Tagline/header/header.component';
import { ButtonComponent } from './Task-2-Tagline/button/button.component';
import { TechnologiesComponent } from './Task-2-Tagline/technologies/technologies.component';
import { ExpirienceComponent } from './Task-2-Tagline/expirience/expirience.component';
import { CardHeaderComponent } from './Task-2-Tagline/card-header/card-header.component';
import { TechHeaderComponent } from './Task-2-Tagline/tech-header/tech-header.component';
import { ExpirienceHeadingComponent } from './Task-2-Tagline/expirience/expirience-heading/expirience-heading.component';
import { ClutchComponent } from './Task-2-Tagline/clutch/clutch.component';
import { ReviewCardsComponent } from './Task-2-Tagline/review-cards/review-cards.component';
import { FiveStarComponent } from './Task-2-Tagline/five-star/five-star.component';
import { ReviewCardsTextComponent } from './Task-2-Tagline/review-cards-text/review-cards-text.component';
import { CardWriterComponent } from './Task-2-Tagline/card-writer/card-writer.component';
import { SlideComponent } from './Task-2-Tagline/slide/slide.component';
import { SlideTextComponent } from './Task-2-Tagline/slide-text/slide-text.component';
import { GrowComponent } from './Task-2-Tagline/grow/grow.component';
import { QuoteimageComponent } from './Task-2-Tagline/quoteimage/quoteimage.component';
import { QuoteComponent } from './Task-2-Tagline/quote/quote.component';
import { BlogsComponent } from './Task-2-Tagline/blogs/blogs.component';
import { FormtextComponent } from './Task-2-Tagline/formtext/formtext.component';
import { FormComponent } from './Task-2-Tagline/form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    HeaderComponent,
    FooterComponent,
    CoverPhotoComponent,
    CardsComponent,
    ButtonComponent,
    TechnologiesComponent,
    ExpirienceComponent,
    CardHeaderComponent,
    TechHeaderComponent,
    ExpirienceHeadingComponent,
    ClutchComponent,
    ReviewCardsComponent,
    FiveStarComponent,
    ReviewCardsTextComponent,
    CardWriterComponent,
    SlideComponent,
    SlideTextComponent,
    GrowComponent,
    QuoteimageComponent,
    QuoteComponent,
    BlogsComponent,
    FormtextComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
