import Col from 'styles/Col'
import Repo from 'components/Repo'
import Row from 'styles/Row'
import { dictionary } from 'dictionary'
import styled from 'styled-components'
import { useStore } from 'store/Store'

const Loader = styled.div`
	margin-top: 50px;
	width: 100%;
	display: flex;
	justify-content: center;
`

const Error = styled.div`
	margin-top: 50px;
	width: 100%;
	display: flex;
	justify-content: center;
`

const EmptySearch = styled.div`
	margin-top: 50px;
	width: 100%;
	display: flex;
	justify-content: center;
`

const List = () => {
	const { repoList, loading, error, isEmptySearch, search } = useStore()

	if (search && isEmptySearch) {
		return <EmptySearch data-testid='empty-search'>{dictionary.emptySearch}</EmptySearch>
	}

	if (error) {
		return <Error data-testid='error-message'>{error.message}</Error>
	}

	if (loading) {
		return <Loader data-testid='loading-message'>{dictionary.loading}</Loader>
	}

	return (
		<Row data-testid='list-wrapper'>
			{repoList.map((repo) => (
				<Col key={repo.id} sm={6} md={4}>
					<Repo {...repo} />
				</Col>
			))}
		</Row>
	)
}

export default List
