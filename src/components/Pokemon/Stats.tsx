import { View, Text, StyleSheet } from "react-native";
import React, { FC } from "react";
import { PokemonStat } from "../../models/pokemon.model";
import { capitalize } from "lodash";

type Props = { stats: PokemonStat[] };

const Stats: FC<Props> = ({ stats }) => {
  const barStyles = (num: number) => {
    return {
      backgroundColor: num > 49 ? "#00ac17" : "#ff3e3e",
      width: `${num}%`,
    };
  };

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {stats.map((item, index) => (
        <View key={index} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}>{item.base_stat}</Text>
            <View style={styles.bgBar}>
              <View style={[styles.bar, barStyles(item.base_stat)]}></View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    backgroundColor: "red",
    height: 5,
    borderRadius: 20,
  },
  bgBar: {
    backgroundColor: "#dedede",
    width: "88%",
    height: 5,
    borderRadius: 20,
    overflow: "hidden",
  },
  block: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  blockInfo: {
    width: "68%",
    flexDirection: "row",
    alignItems: "center",
  },
  blockTitle: {
    width: "32%",
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 50,
  },
  number: {
    width: "12%",
    fontSize: 12,
  },
  statName: {
    fontSize: 12,
    color: "#6b6b6b",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
  },
});

export default Stats;
