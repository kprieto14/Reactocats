import React from 'react'
import { OctoHeader } from './components/OctoHeader'
import { Octocat } from './components/Octocat';
import { OctoFooter } from './components/OctoFooter'

export function App() {
  return (
    <div>
      <OctoHeader/>
      
      <main className='container'>
        <Octocat
          catLink= "https://octodex.github.com/yogitocat/"
          catPicture= "https://octodex.github.com/images/yogitocat.png"
          catName= "Yogitocat"
          catNumber= "#152: "
          artistLink= "https://github.com/johncreek" 
          artistPicture= "https://github.com/johncreek.png"
          artistName= "John Creek"
        />

        <Octocat
          catLink= "https://octodex.github.com/octoqueer/"
          catPicture= "https://octodex.github.com/images/Octoqueer.png"
          catName= "Octogatos"
          catNumber= "#148: "
          artistLink= "https://github.com/cameronfoxly" 
          artistPicture= "https://github.com/cameronfoxly.png"
          artistName= "Cameron Foxly"
        />

        <Octocat
          catLink= "https://octodex.github.com/inflatocat/"
          catPicture= "https://octodex.github.com/images/inflatocat.png"
          catName= "Inflatocat"
          catNumber= "#122: "
          artistLink= "https://github.com/rubyjazzy" 
          artistPicture= "https://github.com/rubyjazzy.png"
          artistName= "Ruby Jazzy"
        />

        <Octocat
          catLink= "https://octodex.github.com/octoliberty/"
          catPicture= "https://octodex.github.com/images/octoliberty.png"
          catName= "Octoliberty"
          catNumber= "#102: "
          artistLink= "https://github.com/tonyjaramillo" 
          artistPicture= "https://github.com/tonyjaramillo.png"
          artistName= "Tony Jaramillo"
        />

        <Octocat
          catLink= "https://octodex.github.com/pusheencat/"
          catPicture= "https://octodex.github.com/images/pusheencat.png"
          catName= "Pusheencat"
          catNumber= "#83: "
          artistLink= "https://github.com/billyroh" 
          artistPicture= "https://github.com/billyroh.png"
          artistName= "Billy Roh"
        />

        <Octocat
          catLink= "https://octodex.github.com/twenty-percent-cooler-octocat/"
          catPicture= "https://octodex.github.com/images/twenty-percent-cooler-octocat.png"
          catName= "20% Cooler Octocat"
          catNumber= "#74: "
          artistLink= "https://github.com/cameronmcefee" 
          artistPicture= "https://github.com/cameronmcefee.png"
          artistName= "Cameron McFee"
        />

        <Octocat
          catLink= "https://octodex.github.com/baracktocat/"
          catPicture= "https://octodex.github.com/images/baracktocat.jpg"
          catName= "Baracktocat"
          catNumber= "#58: "
          artistLink= "https://github.com/cameronmcefee" 
          artistPicture= "https://github.com/cameronmcefee.png"
          artistName= "Cameron McFee"
        />

        <Octocat
          catLink= "https://octodex.github.com/nyantocat/"
          catPicture= "https://octodex.github.com/images/nyantocat.gif"
          catName= "Nyantocat"
          catNumber= "#46: "
          artistLink= "https://github.com/cameronmcefee" 
          artistPicture= "https://github.com/cameronmcefee.png"
          artistName= "Cameron McFee"
        />

        <Octocat
          catLink= "https://octodex.github.com/chellocat/"
          catPicture= "https://octodex.github.com/images/chellocat.jpg"
          catName= "Chellocat"
          catNumber= "#34: "
          artistLink= "https://github.com/cameronmcefee" 
          artistPicture= "https://github.com/cameronmcefee.png"
          artistName= "Cameron McFee"
        />

        <Octocat
          catLink= "https://octodex.github.com/bouncer/"
          catPicture= "https://octodex.github.com/images/bouncer.jpg"
          catName= "Bouncer"
          catNumber= "#14: "
          artistLink= "https://github.com/cameronmcefee" 
          artistPicture= "https://github.com/cameronmcefee.png"
          artistName= "Cameron McFee"
        />      
      </main>

      <OctoFooter />
    </div>
  );
}
