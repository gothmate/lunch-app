import Header from '@/components/Header'
import Footer from '@/components/Footer'


export default function BaseLayout(props: any) {
	return (
		<>
			<Header />
        {props.children}
      <Footer />
		</>
	)
}
