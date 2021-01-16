import { fetcher } from './hooks'

export const followEntity = (userID: string, token: string, entityId: string) =>
	fetcher(
		gql`
			mutation FollowEntity($id: String!, $entity: String!) {
				followEntity(id: $id, entity: $entity) {
					subscribedEntities {
						id
					}
				}
			}
		`,
		{
			id: userID,
			entity: entityId,
		},
		{
			token,
		}
	)

export const followCategory = (
	userID: string,
	token: string,
	category: string
) =>
	fetcher(
		gql`
			mutation FollowEntity($id: String!, $category: String!) {
				followCategory(id: $id, entity: $entity) {
					subscribedCategories {
						id
					}
				}
			}
		`,
		{
			id: userID,
			category,
		},
		{
			token,
		}
	)
