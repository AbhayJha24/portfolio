import Image from 'next/image'
import photo from '../public/photo.webp'
import styles from './page.module.css'

export default function Home() {

  let profession = "Professional";
  return (
    <main className={styles.hero}>
      <section className={styles.titleSection}>
        <h2>Hello, It's me</h2>
        <h1 className={styles.titlename}>Abhay Jha</h1>
        <h2 className={styles.herotagline}>And I'm a <span className={styles.titleblue}>{profession}</span></h2>
        <p className={styles.herodesc}>Esse deserunt et aliquip irure. Pariatur ad reprehenderit ullamco esse consequat incididunt q.</p>
        <button className={styles.learnmore}>Know More</button>
      </section>
      <section className={styles.photoSection}>
        <div className={styles.photobg1}></div>
        <div className={styles.photobg2}></div>
        <div className={styles.photoframe}>
        <Image src={photo} alt='Image' width={300} height={300} className={styles.photo}></Image>
        </div>
      </section>
    </main>
  )
}
