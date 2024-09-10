import Image from "next/image"
import style from './page.module.sass'

export default function Cart() {
  return (
		<div className={style.math}>
			<div>
				<h3>Total Chamado #0001452</h3>
				<div>
					<h4>Frango Xadrez</h4>
					<ul>
						<li>Arroz</li>
						<li>Feijão</li>
						<li>Farofa</li>
						<li>Fritas</li>
						<li>Salada de Alface</li>
					</ul>
					<p>Valor R$16,00</p>
				</div>
			</div>
			<div className={style.valorFinal}>
				<Image width={30} height={30} src={'/cart.svg'} alt='Carrinho' />
				<p>Valor: R$34,00</p>
			</div>
		</div>
	);
}