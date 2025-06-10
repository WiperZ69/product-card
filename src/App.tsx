import styled from 'styled-components'
import { ProductCard } from './components/ProductCard/ProductCard'
import { GlobalStyle } from './styles/GlobalStyle'

const Main = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	padding: 16px;
	background-color: var(--color-bg);
`

function App() {
	return (
		<>
			<GlobalStyle />
			<Main>
				<ProductCard
					title='Российские рубли'
					origin='Россия'
					currency='RUB'
					price={34900}
					imageUrl='/rubles.jpg'
				/>
				<ProductCard
					title='Американская бумажка'
					origin='Америка'
					currency='USD'
					price={34900}
					imageUrl='/usd.jpg'
				/>
				<ProductCard
					title='Европейская бумажка'
					origin='Германия'
					currency='EUR'
					price={34900}
					imageUrl='/euro.jpg'
				/>
			</Main>
		</>
	)
}

export default App
