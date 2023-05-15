import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subtitle: {
    fontSize: 20,
    color: '#000000',
    marginTop: 40,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 12,
    color: 'rgba(0,0,0,0.5)',
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: 20,
    marginBottom: 20,
    marginTop: 24,
  },
  backContainer: {
    position: 'absolute',
    margin: 32,
  },
  backIcon: {
    width: 40,
    height: 40,
  },
});

export default styles;
