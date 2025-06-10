import styled from 'styled-components'

interface ProductCardProps {
	title: string
	origin: string
	price: number
	currency: 'RUB' | 'USD' | 'EUR'
	imageUrl: string
}

const Card = styled.article`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 400px;
	border: 1px solid var(--color-border);
	border-radius: var(--radius-base);
	margin: var(--gap-base) 0;
	overflow: hidden;
	box-shadow: 0 2px 8px var(--color-shadow-light);
	transition: transform var(--transition-fast),
		box-shadow var(--transition-fast);

	&:hover {
		transform: translateY(-4px);
		box-shadow: 0 4px 12px var(--color-shadow-hover);
	}
`

const Image = styled.img`
	width: 100%;
	aspect-ratio: 4 / 3;
	height: 300px;
	object-fit: cover;
	background-color: var(--color-img-bg);
`

const Content = styled.div`
	padding: var(--gap-base);
	display: flex;
	flex-direction: column;
	gap: var(--gap-small);
`

const Title = styled.h3`
	margin: 0;
	font-size: 1.25rem;
	color: var(--color-text-primary);
`

const Origin = styled.p`
	margin: 0;
	font-size: 0.875rem;
	color: var(--color-text-secondary);
`

const Price = styled.span`
	font-size: 1.125rem;
	font-weight: bold;
	color: var(--color-price);
`

export const ProductCard = ({
	title,
	origin,
	price,
	currency,
	imageUrl,
}: ProductCardProps) => {
	const convertToMajorUnit = (price: number) => price / 100

	const formattedPrice = new Intl.NumberFormat('ru-RU', {
		style: 'currency',
		currency,
	}).format(convertToMajorUnit(price))

	return (
		<Card role='region' aria-label={`Карточка валюты: ${title}`}>
			<Image
				src={
					imageUrl?.trim() ? imageUrl : 'https://via.placeholder.com/300x225'
				}
				alt={title}
				loading='lazy'
			/>
			<Content>
				<Title>{title}</Title>
				<Origin>{origin}</Origin>
				<Price aria-label={`Цена: ${formattedPrice}`}>{formattedPrice}</Price>
			</Content>
		</Card>
	)
}
