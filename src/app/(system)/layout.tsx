import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from '@/app/page.module.sass'


export default function BaseLayout(props: any) {
	return (
		<>
			<Header />
      <main className={styles.main}>
			  {props.children}
      </main>
      <Footer />
		</>
	)
}
