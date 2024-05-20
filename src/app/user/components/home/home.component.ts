import { Component } from '@angular/core';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { CarouselModule } from 'primeng/carousel';
import { MatIconModule } from '@angular/material/icon';
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, FooterComponent , CarouselModule , MatIconModule]
})
export class HomeComponent {
    constructor(){

    }

    images = [
        { src: "../../../assets/New product with new idea.jpg", content: "Transform client concepts into tangible solutions" },
        { src: "../../../assets/Success image 2nd Container.jpg", content: "Success in projects and employee knowledge are valued everywhere" },
        { src : "../../../assets/standard-quality-control-collage_batcheditor_fotor.jpg" , content :"We ensure quality in the products we build"}
    ];
}
