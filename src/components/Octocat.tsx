import React from "react";

type Kitty = {
    catLink: string,
    catPicture: string,
    catName: string,
    catNumber: string,
    artistLink: string,
    artistPicture: string,
    artistName: string
}

export function Octocat(props: Kitty) {
    return (
        <article>
          <a href= {props.catLink}
            ><img
              src= {props.catPicture}
              className="catpic"
              alt= {`A picture of the octocat that is named ${props.catName}`}
            />
          </a>

          <ul className="reference-container">
            <li>
              {props.catNumber} <a href= {props.catLink}
                ><strong>{props.catName}</strong>
                </a>
            </li>
            <li>
              <a href= {props.artistLink}
                ><img
                  src= {props.artistPicture}
                  className="artist"
                  alt= {`A picture of the artist that created ${props.catName} that is named ${props.artistName}`}
                />
              </a>
            </li>
          </ul>
        </article>
    );
}