import React from 'react';
import { connect } from 'react-redux';
// Redux actions
import { fetchCategoriesData } from '../../redux/categories/categories.actions';
// Components
import DirectoryCollection from 'components/directory-collection/directory-collection.component';
import Container from 'components/container/container.component'
// Styles
import './directory.styles.sass'

class Directory extends React.Component {
  componentDidMount() {
    const { fetchCategoriesData } = this.props;
    fetchCategoriesData('genres');
    fetchCategoriesData('developers');
    fetchCategoriesData('platforms');
  }

  render() {
    const { categories } = this.props
    return (
      <div className="directory">
        <Container>
          {Object.keys(categories).map((category, idx) => (
            <DirectoryCollection key={idx} rootName={category} title={category} collection={categories[category].collection} isLoading={categories[category].loading} hasError={categories[category].error} />
          ))}
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategoriesData: (categories) => dispatch(fetchCategoriesData(categories)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Directory);























// import React from 'react';
// import { connect } from 'react-redux';
// // Components
// import DirectoryCollection from 'components/directory-collection/directory-collection.component';
// import Container from 'components/container/container.component'
// // Redux actions
// import { fetchGenresData } from '../../redux/genres/genres.actions';
// import { fetchDevelopersData } from '../../redux/developers/developers.actions';
// import { fetchPlatformsData } from '../../redux/platforms/platforms.actions';
// // Styles
// import './directory.styles.sass'

// class Directory extends React.Component {
//   componentDidMount() {
//     const { fetchGenresData, fetchDevelopersData, fetchPlatformsData } = this.props;
//     fetchGenresData();
//     fetchDevelopersData();
//     fetchPlatformsData();
//   }
//   render() {
//     const { genres, developers, platforms } = this.props;
//     return (
//       <div className="directory">
//         <Container>
//           <DirectoryCollection linkUrl="genres" title="By Genres" collection={genres.collection} isLoading={genres.loading} hasError={genres.error} />
//           <DirectoryCollection linkUrl="developers" title="By Developers" collection={developers.collection} isLoading={developers.loading} hasError={developers.error} />
//           <DirectoryCollection linkUrl="platforms" title="By Platforms" collection={platforms.collection} isLoading={platforms.loading} hasError={platforms.error} />
//         </Container>
//       </div>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     genres: state.genres,
//     developers: state.developers,
//     platforms: state.platforms,
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchGenresData: () => dispatch(fetchGenresData()),
//     fetchDevelopersData: () => dispatch(fetchDevelopersData()),
//     fetchPlatformsData: () => dispatch(fetchPlatformsData()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Directory);
