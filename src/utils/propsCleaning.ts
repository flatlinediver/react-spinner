import { CleanProps, SpinnerProps } from 'types';
import { sizeMap, positionMap, colorsMap, speedMap, thickEdgesMap } from 'utils';

export const propsCleaning = (props: SpinnerProps): CleanProps => {
  return thickEdgesMap(colorsMap(positionMap(speedMap(sizeMap(props)))));
};

// const mappers = {
//     size: sizeMap,
//     position: positionMap,
//     colors: colorsMap,
//     speed: speedMap,
//     thickEdges: thickEdgesMap
// }
// class PropsMapper {
//     private props: SpinnerProps;
//     private mappedProps: unknown;
//     constructor(props: SpinnerProps) {
//         this.props = props;
//         this.mappedProps = {};
//     }
//     mapper(mapFunction: keyof typeof mappers) {
//         this.mappedProps = {...this.props, ...mappers[mapFunction](this.props as never)};
//         return this;
//     }
//     build(): CleanProps {
//         return this.mappedProps as CleanProps;
//     }
// };

// export const propsMapper = (props: SpinnerProps) => new PropsMapper(props).mapper("size").mapper("speed").mapper("position").mapper("colors").mapper("thickEdges").build();
