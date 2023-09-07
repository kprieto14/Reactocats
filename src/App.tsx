import React from 'react'
import { OctoHeader } from './components/OctoHeader'
import { Octocat } from './components/Octocat'
import { OctoFooter } from './components/OctoFooter'
import octocats from './octocats.json'

export function App() {
  const octocatsFromdata = octocats.map(cat => (
    <Octocat key={cat.id} catLink={cat.catLink} catPicture={cat.catPicture} catName={cat.catName} catNumber={cat.catNumber} artistLink={cat.artistLink} artistName={cat.artistName} artistPicture={cat.artistPicture}/>
  ))

  return (
    <div>
      <OctoHeader/>
      
      <main className='container'>{octocatsFromdata}</main>

      <OctoFooter />
    </div>
  );
}
