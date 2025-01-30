import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cooking-tips',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cooking-tips.component.html',
  styleUrl: './cooking-tips.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CookingTipsComponent {

  breakPoints = {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    }
  }
  breakPoints2 = {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
  articles = [
    {
      title: 'Fresh vs. Dried Herbs',
      description: 'Discover the nuanced world of herbs. Learn when to opt for the freshness of herbs and when dried variants can amplify your culinary creations.',
      imageUrl: 'assets/images/fresh-dried-herbs.png',
      time: '15 MIN - 01 JUN 23',
    },
    {
      title: 'Choosing Produce',
      description: 'Selecting ripe fruits and vegetables is an art. Explore our insights to ensure optimal taste in every dish. Selecting ripe fruits and vegetables is an art.',
      imageUrl: 'assets/images/choosing-produce.png',
      time: '20 MIN - 01 JUN 23',
    },
    {
      title: 'Understanding Spices',
      description: 'Enhance flavors by navigating the vast array of spices and seasonings. Uncover the secrets of creating dynamic taste profiles.',
      imageUrl: 'assets/images/understanding-spices.png',
      time: '25 MIN - 01 JUN 23',
    },
    {
      title: 'Balancing Sweet and Savory',
      description: 'Achieve the perfect symphony of flavors by mastering the art of balancing sweet and savory elements in your dishes.',
      imageUrl: 'assets/images/balancing-sweet-savory.png',
      time: '15 MIN - 01 JUN 23',
    },
    {
      title: 'Too Salty? Too Sweet? Fixing Seasoning Issues',
      description: 'Discover quick fixes for seasoning mishaps and ensure your dishes are perfectly balanced.',
      imageUrl: 'assets/images/fixing-seasoning.png',
      time: '20 MIN - 01 JUN 23',
    },
    {
      title: 'Storage Solutions',
      description: 'Keep ingredients fresh and accessible with our storage solutions. Transform your kitchen into an organized oasis.',
      imageUrl: 'assets/images/storage-solutions.png',
      time: '25 MIN - 01 JUN 23',
    }
  ];

  recipes = [
    {
      title: 'Savory Herb-Infused Chicken',
      description: 'Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken',
      imageClass: 'bg-gluten-free', // Tailwind background class
      time: '40 MINS',
      date: '01 JUN 23',
      link: '/recipe/1'
    },
    {
      title: 'Plant-Based Cooking',
      description: 'Delight in the realm of plant-based cooking with tips for crafting delicious vegetarian and vegan dishes.',
      imageClass: 'bg-plant-based',
      time: '30 MINS',
      date: '01 JUN 23',
      link: '/recipe/2'
    },
    {
      title: 'Allergy-Friendly Substitutions',
      description: 'Discover options for common allergens, ensuring everyone can savor the flavors of your culinary creations.',
      imageClass: 'bg-allergy-friendly',
      time: '25 MINS',
      date: '01 JUN 23',
      link: '/recipe/3'
    },
    {
      title: 'Savory Herb-Infused Chicken',
      description: 'Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken',
      imageClass: 'bg-gluten-free', // Tailwind background class
      time: '40 MINS',
      date: '01 JUN 23',
      link: '/recipe/1'
    },
  ];

}
