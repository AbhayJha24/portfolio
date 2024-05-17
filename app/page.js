import Image from 'next/image'
import photo from '../public/photo.webp'
import styles from './page.module.css'

export default function Home() {
  
  return (
    <main className={styles.hero}>
      <section className={styles.titleSection}>
        <h2>Hello, It's Me</h2>
        <h1 className={styles.titlename}>Abhay Jha</h1>
        <h2 className={styles.herotagline}>And I'm a <span className={styles.titleblue}>Professional</span></h2>
        <p className={styles.herodesc}>Welcome to my world! I invite you to explore my portfolio, a reflection of my roots and the path I've carved in the realm of technology.</p>
        <button className={styles.learnmore}>Know More</button>
      </section>
      <section className={styles.photoSection}>
        <div className={styles.photobg1}></div>
        <div className={styles.photobg2}></div>
        <div className={styles.photoframe}>
        <Image src={photo} alt='Image' className={styles.photo} priority={true}></Image>
        </div>
      </section>
    </main>

    /*
    Script
    ------

    Welcome to my world! Born under the vibrant skies of Bokaro, Jharkhand, my journey began in the early 21st century.
    My childhood was a tapestry of experiences, painted with the lush landscapes of Itanagar, Arunachal Pradesh.
    As life unfolded, I found my way to the bustling streets of Ranchi, where I navigated through the chapters of my schooling until the 12th grade.

    The quest for knowledge then propelled me to the prestigious halls of the Vellore Institute of Technology, where I honed my skills in Computer Engineering.
    Each city left its mark, shaping me into the professional I am today. I invite you to explore my portfolio, a reflection of my roots and the path I've carved in the realm of technology.
    */
  )
}
