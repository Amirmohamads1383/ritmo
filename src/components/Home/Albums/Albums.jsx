import React from 'react'
import TitleHeader from '../../Common/TitleHeader/TitleHeader'
import AlbumsBoxContainer from "../AlbumsBoxContainer/AlbumsBoxContainer"

export default function Albums() {
  return (
    <section>
        <div className="container">
          <TitleHeader title={"آلبوم‌ها"} button={true} arrow={true} />
          <AlbumsBoxContainer />
        </div>
      </section>
  )
}
