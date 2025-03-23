import { TemplatePortal } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { SideMenuPortalService } from '@core/services/side-menu-portal.service';
import { TranslateModule } from '@ngx-translate/core';
import { BookCard } from '@shared/components/cards/book-card/book-card.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { StoryInformationComponent } from './components/story-information/story-information.component';
import { StoryListComponent } from './components/story-list/story-list.component';
import { SuggestionContinueComponent } from './components/suggestion-continue/suggestion-continue.component';

@Component({
  selector: 'app-story',
  imports: [
    CommonModule,
    NzGridModule,
    TranslateModule,
    StoryInformationComponent,
    StoryListComponent,
    SuggestionContinueComponent,
  ],
  templateUrl: './story.component.html',
  styleUrl: './story.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryComponent implements AfterViewInit {
  public story: BookCard = {
    id: 1,
    title: 'The Hobbit',
    rating: 4,
    gender: 'fantastic',
    nbParticipations: 10,
    cover:
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/art-book-cover-design-template-34323b0f0734dccded21e0e3bebf004c_screen.jpg',
    sequences: [
      "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. \nDu texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. \nPlusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).\nOn sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' \nest qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec nduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).",
      "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. \nDu texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction.",
    ],
  };

  @ViewChild('suggestionButtons') suggestionButtons!: TemplateRef<any>;

  constructor(
    private portalService: SideMenuPortalService,
    private viewContainerRef: ViewContainerRef
  ) {}

  public ngAfterViewInit(): void {
    this.portalService.setPortal(
      new TemplatePortal(this.suggestionButtons, this.viewContainerRef)
    );
    this.portalService.disableDefaultButton(['story']);
  }
}
